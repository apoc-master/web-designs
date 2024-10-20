function toggleTheme()
{
    var theme = document.body.className;    
    let applyTheme = (theme === 'light') ? 'dark' : 'light';
    
    document.body.classList.remove(theme);
    document.body.classList.add(applyTheme);
    console.log("times");
}

