console.log('funguju!');

//ZADANI
/*
Vytvoříme aplikaci, která zobrazuje seznam kontaktů. U každého kontaktu budeme evidovat jméno, email a telefonní číslo.

Založte si nový projekt příkazem

npm init kodim-app cviceni-kontakty-dom html-css-js
Otevřete si ve VS Code vytvořenou složku cviceni-kontakty-dom.

Vytvořte jednoduchou stránku s prázdným elementem #app.

Uvnitř souboruindex.js pomocí document.createElement vytvořte element div a uložte jej do proměnné contact1.

Na váš element přidejte CSS třídu contact.

Nastavte innerHTML vašho elementu na následujicí obsah

<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>
Vyberte ze stránky element #app a vložte do něj element s kontaktem.

Stejným postupem přidejte na stránku ještě další dva kontakty contact2 a contact3.

Nepovinně si můžete pohrát se stylováním. U každého kontaktu se vám například může hodit takováto hezká ikonka.
*/

const contact1 = document.createElement('div');
contact1.classList.add('contact');
contact1.innerHTML += `
<img src="img/contact.png">
<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>
`
const app = document.querySelector('#app')
app.append(contact1);


const contact2 = document.createElement('div');
contact2.classList.add('contact');
contact2.innerHTML += `
<img src="img/contact.png">
<span class="name">Radana Pokorna</span>
<span class="phone">+420 123 456 789</span>
<span class="email">radana.pokorna@gmail.com</span>
`
app.append(contact2);


const contact3 = document.createElement('div');
contact3.classList.add('contact');
contact3.innerHTML += `
<img src="img/contact.png">
<span class="name">Michal Cervenka</span>
<span class="phone">+420 789 456 123</span>
<span class="email">michal.cervenka@gmail.com</span>
`

app.append(contact3);