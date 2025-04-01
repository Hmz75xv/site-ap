
function openAlertDialog(dialogId, buttonElement) {
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'block';
  }
  
  function closeAlertDialog() {
    const dialog = document.getElementById('alertdialog');
    dialog.style.display = 'none';
  }
  
  const saveButton = document.getElementById('notes_save');
  const discardButton = document.getElementById('notes_discard');
  const spinnerIcon = saveButton.querySelector('.spinner');
  const checkIcon = saveButton.querySelector('.check');
  
  saveButton.addEventListener('click', () => {

    spinnerIcon.style.display = 'inline-block';
    checkIcon.style.display = 'none';
    
    setTimeout(() => {
      spinnerIcon.style.display = 'none';
      checkIcon.style.display = 'inline-block';

      alert('Changes saved!');
    }, 2000);
  });
  