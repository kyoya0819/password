const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const L = 6;
const target = document.getElementById('password');

function random_string()
{
    return Array.from(crypto.getRandomValues(new Uint32Array(L))).map((n)=>S[n%S.length]).join('');
}

function make()
{
    target.innerHTML = random_string() + "-" + random_string() + "-" + random_string();
}

function copy()
{
    let text = document.createElement("textarea");
    text.value = target.innerText;
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove();

    document.getElementById('success').classList.add('active');

    setTimeout(() => {
        document.getElementById('success').classList.remove('active');
    }, 2000);
}

function select()
{
    let range = document.createRange();
    range.selectNode(document.getElementById('password'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
}

window.onload = make;
document.getElementById('make').onclick = make;
document.getElementById('copy').onclick = copy;
document.getElementById('password').onclick = select;
