let products = []; // Array para armazenar os produtos
let editingIndex = -1; // Índice do produto em edição

const productForm = document.getElementById("productForm");
const productBody = document.getElementById("productBody");

// Função para adicionar um produto na tabela
function addProductToTable(product) {
    const newRow = productBody.insertRow();

    newRow.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.value}</td>
        <td>${product.quantity}</td>
        <td>${product.observation}</td>
        <td>${product.date}</td>
        <td>
            <button type="button" onclick="editProduct(${product.id})">Editar</button>
            <button type="button" onclick="deleteProduct(${product.id})">Excluir</button>
        </td>
    `;
}

// Função para limpar o formulário
function clearForm() {
    productForm.reset();
    editingIndex = -1;
    productForm.style.display = "none";
}

// Evento de clique no botão "Adicionar Produto"
document.getElementById("addButton").addEventListener("click", function() {
    productForm.style.display = "block";
});

// Evento de clique no botão "Salvar"
document.getElementById("saveButton").addEventListener("click", function() {
    const id = products.length + 1;
    const name = document.getElementById("productName").value;
    const value = document.getElementById("productValue").value;
    const quantity = document.getElementById("productQuantity").value;
    const observation = document.getElementById("productObservation").value;
    const date = document.getElementById("productDate").value;

    const newProduct = { id, name, value, quantity, observation, date };
    products.push(newProduct);
    addProductToTable(newProduct);
    clearForm();
});

// Evento de clique no botão "Cancelar"
document.getElementById("cancelButton").addEventListener("click", clearForm);

// Função para editar um produto
function editProduct(index) {
    editingIndex = index - 1;
    const product = products[editingIndex];
    document.getElementById("productName").value = product.name;
    document.getElementById("productValue").value = product.value;
    document.getElementById("productQuantity").value = product.quantity;
    document.getElementById("productObservation").value = product.observation;
    document.getElementById("productDate").value = product.date;

    productForm.style.display = "block";
}

// Função para excluir um produto
function deleteProduct(index) {
    products.splice(index - 1, 1);
    productBody.innerHTML = "";
    products.forEach(product => addProductToTable(product));
}