function sendMail() {
    let msgSendForm = 'Enviando...';
    document.getElementById('msgSendForm').innerHTML = msgSendForm;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let mensagem = document.getElementById('mensagem').value;
    
    fetch('/sendmail', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' 
        },
      body: JSON.stringify(
        { 
          nome,
          email,
          telefone,
          mensagem 
        })
    }).then(response => {
      if(response.status === 200){
        document.getElementById('msgSendForm').innerHTML = `<span style='color:#00b51e; font-weight:600'>Obrigado por sua mensagem, entraremos em contato o mais breve possível!<span>`;
        document.getElementById('formContact').reset();
      }else{
        document.getElementById('msgSendForm').innerHTML = `<span style='color:#ff0000; font-weight:600'>Ops... houve um erro, por gentileza, entre em contato através do Whatsapp, obrigado! Erro: ${response.status}</span>`;
      }
    }).catch(err=>{
      document.getElementById('msgSendForm').innerHTML = `<span style='color:#ff0000; font-weight:600'>Ops... houve um erro, por gentileza, entre em contato através do Whatsapp, obrigado! Erro: ${err}</span>`;
    })
  }