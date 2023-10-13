// rules section start
const modal = document.getElementById('myModal');
const overlay = document.getElementById('overlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const openModalBtn = document.getElementById('openModalBtn');

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}
// open rule
openModalBtn.addEventListener('click', openModal);
// close rule
closeModalBtn.addEventListener('click', closeModal);