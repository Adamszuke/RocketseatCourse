function toggleMode() {
    const html = document.documentElement

    const img = document.querySelector('#profile img')

    // if(html.classList.contains('light'))
    // {
    //     html.classList.remove('light')
    // }
    // else 
    // {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')

    if(html.classList.contains('light'))
    {
        img.setAttribute('src', "./assets/PlayerRocket.png")
    }
    else
    {
        img.setAttribute('src', "./assets/Avatar.png")
    }
}