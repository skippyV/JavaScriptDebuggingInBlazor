
This project was built to test JavaScript from Blazor.
I posted on StackOverflow that I cannot get debugging to work from within the JS code.

Specifically, I am unable to hit a breakpoint in JavaScript loaded from a Blazor Web App. (.Net 10)
The JS functions, themselves, appear to work as expected.
I have ScriptDebugging Enabled in Visual Studio.

I had no luck adding the script to the App.razor file. That approach always
wound up with function not resolved.

So load JS module in OnAfterRenderAsync, and using that approach 
got the example JS code working. But then I couldn't get breakpoints 
to break into JS UNLESS I added a "debugger;"  statement within the JS code.
Then VS will throw up a dynamic page, and allow me to add and use breakpoints in JS.


References:
https://stackoverflow.com/questions/79882162/javascript-breakpoints-are-never-hit-while-debugging-blazor-web-app-net-10
https://stackoverflow.com/questions/10573819/debug-javascript-in-asp-net
 