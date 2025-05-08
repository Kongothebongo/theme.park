
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>__        __   _                            _                _    
\ \      / /__| | ___ ___  _ __ ___   ___  | |__   __ _  ___| | __
 \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \ | '_ \ / _` |/ __| |/ /
  \ V  V /  __/ | (_| (_) | | | | | |  __/ | |_) | (_| | (__|   < 
   \_/\_/ \___|_|\___\___/|_| |_| |_|\___| |_.__/ \__,_|\___|_|\_\</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
