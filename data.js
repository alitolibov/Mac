const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 'From $999',
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: 'm1.png',
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                img: 'memory.png',
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: '2TB',
                type: 'Maximum configurable storage'
            },
            img: 'battery.png',
            battery: 'Up to 18 hours battery life',
            camera: {
                img: 'video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: '2.8 lb',
            kg: 'weight',
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13"',
        img: 'macbook13.png',
        price: 'From $1299',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                img: 'm1.png',
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                img: 'memory.png',
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: '2TB',
                type: 'Maximum configurable storage'
            },
            img: 'battery.png',
            battery: 'Up to 20 hours battery life',
            camera: {
                img: 'video.png',
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: '3.0 lb',
            kg: 'weight',
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',
        price: 'From $999',
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                img: 'intel.png',
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                img: 'memory2.png',
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: '8TB',
                type: 'Maximum configurable storage'
            },
            img: 'battery.png',
            battery: 'Up to 11 hours battery life',
            camera: {
                img: 'video.png',
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: '4.3 lb',
            kg: 'weight',
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]
for(let item of data) {
    let container = document.querySelector('.container')
    let wrap = document.createElement('div')
    let img = document.createElement('img')
    let title = document.createElement('p')
    let price = document.createElement('p')
    let block = document.createElement('div')
    let circle = document.createElement('div')
    let btn = document.createElement('div')
    let hr = document.createElement('div')
    let hr2 = document.createElement('div')
    let size = document.createElement('p')
    let text = document.createElement('p')
    let block2 = document.createElement('div')
    let block3 = document.createElement('div')
    let block4 = document.createElement('div')
    let proc = document.createElement('img')
    let text2 = document.createElement('p')
    let text3 = document.createElement('p')
    let block5 = document.createElement('div')
    let ram = document.createElement('img')
    let text4 = document.createElement('p')
    let text5 = document.createElement('p')
    let block6 = document.createElement('div')
    let text6 = document.createElement('p')
    let text7 = document.createElement('p')
    let block7 = document.createElement('div')
    let batt = document.createElement('img')
    let text8 = document.createElement('p')
    let block8 = document.createElement('div')
    let video = document.createElement('img')
    let text9 = document.createElement('p')
    let text10 = document.createElement('p')
    let block9 = document.createElement('div')
    let text11 = document.createElement('p')
    let text12 = document.createElement('p')
    let a = document.createElement('a')

    wrap.classList.add('item')
    img.classList.add('img')
    img.src = `./img/${item.img}`
    title.classList.add('title')
    title.innerHTML = item.title
    price.classList.add('price')
    price.innerHTML = item.price
    block.classList.add('block')
    circle.classList.add('circle')
    circle.style.backgroundColor = item.colors
    btn.classList.add('btn')
    btn.innerHTML = 'Buy'
    hr.classList.add('hr')
    hr2.classList.add('hr')
    size.classList.add('title')
    size.innerHTML = item.specs.display.size
    text.classList.add('price')
    text.innerHTML = item.specs.display.title
    block2.classList.add('block2')
    block3.classList.add('block3')
    block4.classList.add('block3')
    proc.src = `./img/${item.specs.chip.img}`
    text2.classList.add('price')
    text2.innerHTML = item.specs.chip.title
    text3.classList.add('text')
    text3.innerHTML = item.specs.chip.description
    block5.classList.add('block5')
    ram.src = `./img/${item.specs.ram.img}`
    text4.classList.add('price')
    text4.innerHTML = item.specs.ram.title
    text5.classList.add('text')
    text5.innerHTML = item.specs.ram.description
    block6.classList.add('block4')
    text6.classList.add('title')
    text6.innerHTML = item.specs.memory.size
    text7.classList.add('text')
    text7.innerHTML = item.specs.memory.type
    block7.classList.add('block4')
    batt.src = `./img/${item.specs.img}`
    text8.classList.add('text')
    text8.innerHTML = item.specs.battery
    block8.classList.add('block5')
    video.src = `./img/${item.specs.camera.img}`
    text9.classList.add('price')
    text9.innerHTML = item.specs.camera.title
    text10.classList.add('text')
    text10.innerHTML = item.specs.ram.description
    block9.classList.add('block4')
    text11.classList.add('title')
    text11.innerHTML = item.specs.weight
    text12.classList.add('text')
    text12.innerHTML = item.specs.kg
    a.href = "https://www.apple.com/mac/"
    a.classList.add('a')
    a.innerHTML = 'Learn more >'

    container.append(wrap) 
    wrap.append(img,block2,hr,block3,block4,block5,block6,block7,block8,block9,hr2,a)
    block2.append(title,price,block,btn)
    block3.append(size,text)
    block4.append(proc,text2,text3)
    block5.append(ram,text4,text5)
    block7.append(batt,text8)
    block6.append(text6,text7)
    block8.append(video,text9,text10)
    block9.append(text11,text12)
    block.append(circle)
    
}