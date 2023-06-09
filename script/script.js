const nameCats = [
    'Кот с усами',
    'кошка с колпаком',
    'Кот с тыквой',
    'Кошка-балерина'

]

const imageCats = [
    'img/cats/01.png',
    'img/cats/02.png',
    'img/cats/03.png',
    'img/cats/04.png',
]

const spisokСharacteristic1 = [
    'Гладкошерстный',
    'Белый с рыжими глазами',
    'Вакцинирован',
    'Есть ветпаспорт',
    'Приучен к когтеточке',
    'Знает лоточе',
]

const spisokСharacteristic2 = [
    'Гладкошерстная',
    'Трёхцветная с зелеными глазами',
    'Вакцинирована',
    'Есть ветпаспорт',
    'Приучен к когтеточке',
    'Знает лоточек',

]

const spisokСharacteristic3 = [
    'Гладкошерстный',
    'Черно-белый с зелеными глазами',
    'Вакцинирован',
    'Есть ветпаспорт',
    'Приучен к когтеточке',
    'Знает лоточек',

]

const spisokСharacteristic4 = [
    'Гладкошерстная',
    'Трёхцветная с зелеными глазами',
    'Вакцинирована',
    'Есть ветпаспорт',
    'Приучен к когтеточке',
    'Знает лоточек',

]

for (let i=0; i < nameCats.length; i++){
    const dataNameCats = document.createTextNode(nameCats [i]);
    const textCats = document.getElementById(`name-cat-${i+1}`);
    textCats.appendChild(dataNameCats);
}
const imagePaths = document.querySelectorAll('.thumb img')

for (let i=0; i < imagePaths.length; i++) {
    imagePaths [i].src = imageCats [i];
    imagePaths [i].alt = nameCats [i];
}

for (let i=0; i < spisokСharacteristic1.length; i++){
    const dataCharacteristic1 = document.createTextNode(spisokСharacteristic1 [i]);
    const textСharacteristic1 = document.getElementById(`spisok-characteristic-1-${i+1}`);
    textСharacteristic1.appendChild(dataCharacteristic1);
}
for (let i=0; i < spisokСharacteristic2.length; i++){
    const dataCharacteristic2 = document.createTextNode(spisokСharacteristic2 [i]);
    const textСharacteristic2 = document.getElementById(`spisok-characteristic-2-${i+1}`);
    textСharacteristic2.appendChild(dataCharacteristic2);
}
for (let i=0; i < spisokСharacteristic3.length; i++){
    const dataCharacteristic3 = document.createTextNode(spisokСharacteristic3 [i]);
    const textСharacteristic3 = document.getElementById(`spisok-characteristic-3-${i+1}`);
    textСharacteristic3.appendChild(dataCharacteristic3);
}
for (let i=0; i < spisokСharacteristic4.length; i++){
    const dataCharacteristic4 = document.createTextNode(spisokСharacteristic4 [i]);
    const textСharacteristic4 = document.getElementById(`spisok-characteristic-4-${i+1}`);
    textСharacteristic4.appendChild(dataCharacteristic4);
}
