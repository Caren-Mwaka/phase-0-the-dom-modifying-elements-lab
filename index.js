const body = document.body

const main = document.querySelector('main#main')
main.remove()
//body.append(main)

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
//body.append(newHeader)
