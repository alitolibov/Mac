let form = document.forms.form
let cancel = document.querySelector('.no')
let save = document.querySelector('.yes')
let inputChanged = document.querySelector('.changedBy')
let inputChangedAge = document.querySelector('.changedByAge')
let container = document.querySelector('.biggest')
let inps = document.querySelectorAll('.inputName')
let id
let info = [{
        id: Math.random(),
        name: 'Bruce Reyes',
        age: '34'
    },
    {
        id: Math.random(),
        name: 'Benjamin Dean',
        age: '25'
    },
    {
        id: Math.random(),
        name: 'Philip Lucas',
        age: '14'
    }
]

function reload(arr) {
    container.innerHTML = ''
    for (let item of arr) {
        let counter = 1
        counter++
        let big = document.createElement('div')
        let hr = document.createElement('div')
        let div = document.createElement('div')
        let countes = document.createElement('p')
        let text = document.createElement('p')
        let birthday = document.createElement('p')
        let changed = document.createElement('div')
        let changedBy = document.createElement('div')
        let trash = document.createElement('div')
        let wrap = document.createElement('div')
        let wraper = document.createElement('div')
        let number = document.createElement('div')
        let modal = document.querySelector('.modal')
        let modalBg = document.querySelector('.modalBg')
       

        number.classList.add('number')
        wrap.classList.add('wrap')
        wraper.classList.add('wraper')
        big.classList.add('big')
        hr.classList.add('hr')
        div.classList.add('block')
        countes.classList.add('count')
        text.classList.add('count')
        birthday.classList.add('count')
        countes.innerHTML = counter + 1
        text.innerHTML = item.name
        birthday.innerHTML = new Date().getFullYear() - item.age
        changed.classList.add('changed')
        changedBy.classList.add('img')
        trash.classList.add('img2')

        container.append(big)
        big.append(div, hr)
        div.append(number, wrap, wraper, changed)
        number.append(countes)
        wrap.append(text)
        wraper.append(birthday)
        changed.append(changedBy, trash)

        trash.onclick = () => {
            arr = arr.filter(a => a.id !== item.id)
            reload(arr)
        }
        changedBy.onclick = () => {
            inputChanged.value = item.name
            id = item.id
            modal.style.display = 'block'
            modalBg.style.display = 'block'
            setTimeout(() => {
                modal.style.opacity = '1'
                modalBg.style.opacity = '1'
            }, 100);
            reload(arr)
        }
        cancel.onclick = () => {
            modal.style.display = 'none'
                modalBg.style.display = 'none'
            setTimeout(() => {
                modal.style.opacity = '0'
            modalBg.style.opacity = '0'
            }, 100);
            reload(arr)
        }
        save.onclick = () => {
           let found = arr.find(item => item.id === id)
           found.age = ''
           found.age = new Date().getFullYear() - inputChangedAge.value
           found.name = inputChanged.value
           modal.style.display = 'none'
                modalBg.style.display = 'none'
            setTimeout(() => {
                modal.style.opacity = '0'
            modalBg.style.opacity = '0'
            }, 100);
            reload(arr)
        }


    }
}
reload(info)
form.onsubmit = (e) => {
    e.preventDefault()

    let information = {
        id: Math.random()
        
    }
    let fm = new FormData(form)
    fm.forEach((value, key) => {
        information[key] = value
    })

    info.push(information)
    reload(info)

}