function listarAlunos(lsAlunos){
    let tabela="<table>"
    +"<thead>"
       +"<tr>"
            +"<th>Nome</th>"
            +"<th>RA</th>"
            +"<th colspan=2>Nota P1</th>"
            +"<th>Nota P2</th>"
            +"<th>Média</th>"
        +"</tr>"
    +"</thead>"
    +"<tbody>";

    let mediaP1=0;
    let mediaP2=0;
    let aprovados=0;
    let reprovados=0;

    for(let i=0; i<lsAlunos.length;i++){
        mediaP1+=lsAlunos[i].notaP1;
        mediaP2+=lsAlunos[i].notaP2;
        tabela+= "<tr>"
                        +"<td>"+ lsAlunos[i].nome +"</td>"
                        +"<td>"+ lsAlunos[i].ra +"</td>"
                        +"<td class='notap1' colspan=2>"+ lsAlunos[i].notaP1.toFixed(2) +"</td>"
                        +"<td class='notap2'>"+ lsAlunos[i].notaP2.toFixed(2) +"</td>"
                        +"<td class='media'>"+ ((lsAlunos[i].notaP1+lsAlunos[i].notaP2)/2).toFixed(2) +"</td>"
                +"</tr>";
        if((lsAlunos[i].notaP1+lsAlunos[i].notaP2)/2 >= 6){
            aprovados++;
        }
        else{
            reprovados++;
        }
    }

    mediaP1=mediaP1/lsAlunos.length;
    mediaP2=mediaP2/lsAlunos.length;

    tabela+= "<tr>"
                +"<td colspan=2> Média da Turma</td>"
                +"<td class='mediap1' colspan=2>"+ mediaP1.toFixed(2) +"</td>"
                +"<td class='mediap2'>"+ mediaP2.toFixed(2) +"</td>"
                +"<td class='mediamedia'>"+ (mediaP1+mediaP2)/2 +"</td>"
            +"</tr>"
            +"<tr>"
                +"<td colspan=3> Aprovados = "+ aprovados +"</td>"
                +"<td colspan=3> Reprovados = "+ reprovados +"</td>"
            +"</tr>"
            ;

    document.write(tabela);

    let notas = document.querySelectorAll('td.notap1, td.notap2, td.media, td.mediap1, td.mediap2, td.mediamedia');

    console.log(notas);

    for(let i=0; i<notas.length; i++){
        if(parseInt(notas[i].innerText, 10) < 6){
            notas[i].classList.add("v");
        }
        else{
            notas[i].classList.add("a");
        }
    }
}