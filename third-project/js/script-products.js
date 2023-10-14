// Verificar si el usuario ha iniciado sesión
var authenticatedUser = localStorage.getItem("authenticatedUser");

if (!authenticatedUser) {
    // El usuario no ha iniciado sesión, redirige a la página de error
    window.location.href = "../html/error.html";
}

// Establecer un temporizador de 10 segundos para cerrar la sesión
setTimeout(function () {
    // Limpiar la sesión local y redirigir a la página de inicio de sesión
    localStorage.removeItem("authenticatedUser");
    window.location.href = "../html/index.html";
}, 999999999); // 10000 milisegundos = 10 segundos

// Datos iniciales de productos (esto podría ser reemplazado por una base de datos real)

let products = [];

const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");

// Función para guardar o actualizar un producto
function saveProduct() {
    const productId = document.getElementById("product-id").value;
    const productName = document.getElementById("product-name").value;
    const productDescription = document.getElementById("product-description").value;
    const productPrice = document.getElementById("product-price").value;
    const productImageUrl = document.getElementById("product-image-url").value;

    if (productId) {
        // Actualizar un producto existente
        const productIndex = products.findIndex(product => product.id === productId);
        if (productIndex !== -1) {
            products[productIndex] = {
                id: productId,
                name: productName,
                description: productDescription,
                price: productPrice,
                imageUrl: productImageUrl
            };
        }
    } else {
        // Crear un nuevo producto
        const newProduct = {
            id: new Date().getTime().toString(),
            name: productName,
            description: productDescription,
            price: productPrice,
            imageUrl: productImageUrl
        };
        products.push(newProduct);
    }

    // Limpia el formulario
    productForm.reset();

    // Actualiza la lista de productos
    displayProducts();
}

// Función para cargar la lista de productos
function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td><img src="${product.imageUrl}" alt="${product.name}" width="100"></td>
            <td>
                <button class="btn btn-warning" onclick="editProduct('${product.id}')">Editar</button>
                <button class="btn btn-danger" onclick="deleteProduct('${product.id}')">Eliminar</button>
            </td>
        `;
        productList.appendChild(row);
    });
}

// Función para editar un producto
function editProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (product) {
        document.getElementById("product-id").value = product.id;
        document.getElementById("product-name").value = product.name;
        document.getElementById("product-description").value = product.description;
        document.getElementById("product-price").value = product.price;
        document.getElementById("product-image-url").value = product.imageUrl;
    }
}

// Función para eliminar un producto
function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    displayProducts();
}

// Cargar la lista de productos al cargar la página
displayProducts();
