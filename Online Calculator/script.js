/*


           ||||||||||||||||||||||||||||||||||||||||||||||||||
           |||                                            |||
           |||   Welcome, this website is property of     |||
           |||   Jean-Michael Harris. Feel free to email  |||
           |||   me at jeanmichael.harris@gmail.com       |||
           |||   You can contact me on 704 626 8078       |||
           |||   and my homepage currently can be found   |||
           |||   at developerharris.glitch.me             |||
           |||                                            |||
           ||||||||||||||||||||||||||||||||||||||||||||||||||


*/

function insert(num)
{
    document.form.textview.value = document.form.textview.value+num;
}

function equal()
{
    var exp = document.form.textview.value;
    if(exp)
    {
        document.form.textview.value = eval(exp);
    }
}

function clean()
{
    document.form.textview.value="";
}

function back()
{
    var exp = document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1)
}