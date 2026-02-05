
This project was built to test JavaScript from Blazor.
I posted on StackOverflow that I cannot get debugging to work from within the JS code.

Specifically, I am unable to hit a breakpoint in JavaScript loaded from a Blazor Web App. (.Net 10)
The JS functions, themselves, appear to work as expected.
I have ScriptDebugging Enabled in Visual Studio.

If I place a "debugger;"  statement within the JS code, then VS will
throw up a dynamic page, that uses the source, to bring you to that 
code loaded in memory - and stops on that debugger statement. But if I try to
set a breakpoint in that dynamic page and press Continue, the debugger
just keeps hitting null exceptions.
 