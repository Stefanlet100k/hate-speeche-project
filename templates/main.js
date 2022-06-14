class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <link rel='stylesheet' href="{{ url_for('static', filename='css/style1.css')}}"/>
        <!--<link rel='stylesheet' href='style1.css'/>-->
        <title>NoHate</title>
        <div class="pageHeader">Hate speech detector</div>
        <Ul>
           <li><a class="navbar" href='http://localhost:5000/'>Home</a></li>  
           <li><a class="navbar" href='https://onedrive.live.com/view.aspx?resid=91D230D4EADCF3B9!195&ithint=file%2cdocx&authkey=!ACr5edcxPh6uR1I'>About</a></li>
           <li><a class="navbar" href='https://en.wikipedia.org/wiki/Hate_speech#:~:text=Hate%20speech%20is%20defined%20by,sex%2C%20or%20sexual%20orientation%22.'>What is hate speech?</a></li>
           <li><a class="navbar" href="http://localhost:5000/team">Team</a></li>
  
        </Ul>
        
     </header>`
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            ©️ 2022 WUST
        </footer>
        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);