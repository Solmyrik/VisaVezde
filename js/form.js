// const data = new Date();
// let currentDay = data.getDay();

// const button = document.querySelector('.quiz__button');
// const nameInput = document.querySelector('.input-name');
// const phoneInput = document.querySelector('.input-phone');

// button.addEventListener('click', async () => {
//   let currentName = nameInput.value;
//   let currentPhone = phoneInput.value;
//   let currentNumber = `id${getRandomInt(100000)}`;
//   if (currentPhone.length > 17 && currentName.length > 1) {
//     let formData = new FormData();
//     formData.append('key1', currentName);
//     formData.append('key2', currentPhone);
//     formData.append('key3', currentNumber);
//     console.log(currentName, currentPhone, currentNumber);
//     let responce = await fetch('sendmail.php', {
//       method: 'POST',
//       body: formData,
//     });
//     thanksPopup();
//     nameInput.value = '';
//     phoneInput.value = '';
//   } else {
//     alert('Введите корректно имя и номер телефона');
//   }
// });

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// const thanksBlock = document.querySelector('.thanks');

// function thanksPopup() {
//   thanksBlock.style.display = 'block';
//   setTimeout(() => {
//     thanksBlock.style.display = 'none';
//   }, 3000);
// }
