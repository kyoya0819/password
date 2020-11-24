const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const L = 6;
const target = document.getElementById('password');

function random_string()
{
    return Array.from(crypto.getRandomValues(new Uint32Array(L))).map((n)=>S[n%S.length]).join('');
}

document.getElementById('make').onclick = function()
{
    target.value = random_string() + "-" + random_string() + "-" + random_string();
};
