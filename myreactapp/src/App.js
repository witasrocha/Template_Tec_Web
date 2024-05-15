//importando as bibliotecas necessarias

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


//funcao que imprime o ano no rodape
function getYear() {
    return new Date().getFullYear();
}

//funcao que retorna o HTML para apresentacao do usuario
function App() {

  var x =getYear(); 

  return (

      <div class="">                 
                <div class="container-fluid d-grid gap-3">
                    <div class="row d-grid gap-3">                    
                        <img class="rounded mx-auto d-block" style={{height:70, width:100}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s" />                    
                    </div>


                    <div class="row d-grid gap-3" style={{background:'#4B0082'}} >
                        
                        <ul class="nav justify-content-center" style={{padding:10,margin:10}}>
                              <li class="nav-item">
                                <a class="nav-link active" href="#inicio" style={{color:'#fff'}}>Início</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#github" style={{color:'#fff'}}>Github</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#bootstrap" style={{color:'#fff'}}>Bootstrap</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#react" style={{color:'#fff'}}>React</a>
                              </li>
                        </ul>
                    </div>
                </div>                                            

                <section class="section d-grid gap-3" id="inicio">                            
                <div class="container d-grid gap-3">
                    <div class="row d-grid gap-3">                                                       
                                <img class="img-fluid" src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F291a08qbtxbs85b7dp64.png"/>
                                <p>
                                    Para que um site seja aberto, é preciso contar com processamentos em dois lados: no navegador (cliente) e no lado do servidor, que hospeda o site. O primeiro compreende, naturalmente, toda a parte visual: menus, imagens, vídeos, links, estrutura do site, composição dos elementos e tudo o que se refere à usabilidade. </p> 

                                    <p>No desenvolvimento web, chamamos de front-end a parte responsável por aspectos visíveis e interativos de uma página web, da parte de quem o acessa (cliente). Para quem está acessando uma página, é tudo aquilo que ela vê e manipula — como recursos gráficos, elementos de uma interface e até mesmo parte da lógica de programação do site. </p>

                                    <p>Essa área cuida de escolhas mais básicas, como a definição de onde o menu deverá ser posicionado, até questões mais complexas, como a validação de dados.</p>

                                    <p>Para essas funções, o front envolve o uso de linguagens como HTML, CSS e JavaScript — linguagem mais usada (67,7%) em projetos web, segundo pesquisa de 2020 do Stack Overflow.</p>                
                        
                        
                    </div>
                    </div>
                    </section>

                    <section class="section d-grid gap-3" id ="github"> 
                    <div class="container d-grid gap-3">
                    <div class="row d-grid gap-3">
                                                      
                        <h3 class="text-center font-weight-bold">
                            GITHUB
                        </h3>
                        <img class="img-fluid" src="https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png" />
                        <p>
                            Um sistema de controle de versão, ou VCS, monitora o histórico de alteraçoes à medida que as pessoas e equipes colaboram em projetos em conjunto. Como os desenvolvedores fazem alterações no projeto, qualquer versão anterior do projeto pode ser recuperada a qualquer momento. </p>

                              <p>Os desenvolvedores podem revisar o histórico do projeto para descobrir: </p>

                              <p>
                              <ul>
                                <li>Quais alterações foram feitas?</li>
                                <li>Quem fez as alterações?</li>
                                <li>Quando as alterações foram feitas?</li>
                                <li>Por que as alterações foram necessárias?</li>                                
                              </ul>
                              </p>                              
                             
                             <p> Os VCSs fornecem a cada colaborador uma visão unificada e consistente de um projeto, evidenciando o trabalho que já está em andamento. Ver um histórico transparente das alterações, quem as fez, e como eles contribuem para o desenvolvimento de um projeto ajuda os integrantes da equipe a manter-se alinhados enquanto trabalham de forma independente. </p>

                              <p> Em um sistema de controle de versão distribuído, cada desenvolvedor tem uma cópia completa do projeto e do histórico do projeto. Ao contrário dos sistemas de controle de versão centralizados conhecidos, os DVCSs não precisam de uma conexão constante com um repositório central. Git é o sistema de controle de versão distribuída mais popular. O Git é comumente usado para o desenvolvimento de software de código aberto e comercial, com benefícios significativos para indivíduos, equipes e negócios. </p>

                              <p>O Git permite que os desenvolvedores vejam toda a linha do tempo das suas alterações, decisões e progressão de qualquer projeto em um só lugar. Desde o momento em que acessam a história de um projeto, o desenvolvedor tem todo o contexto de que precisa para entender e começar a contribuir. </p>

                              <p>Os desenvolvedores trabalham em todos os fusos horários. Com um DVCS como o Git, a colaboração pode acontecer a qualquer momento enquanto mantém a integridade do código-fonte. Ao usar branches, os desenvolvedores podem propor alterações no código de produção.</p>

                              <p>As empresas que usam o Git podem derrubar as barreiras de comunicação entre equipes e mantê-las focadas em fazer o melhor trabalho. Além disso, o Git possibilita alinhar especialistas em todos os negócios para colaborar em grandes projetos.</p>                
                
                           


                    </div>
                    </div>

                    </section>

                     <section class="section d-grid gap-3" id="bootstrap">
                    
                    <div class="container d-grid gap-3">
                    <div class="row d-grid gap-3">
                        
                            
                                <h3 class="text-center font-weight-bold" >
                                    BOOTSTRAP
                                </h3>

                                <img class="img-fluid" src="https://assets-global.website-files.com/6411daab15c8848a5e4e0153/659fce6c4c67870a474b854e_bootstrap-1.jpeg" />
                                <p>
                                    Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma. </p>

                                      <p>Originalmente, o Bootstrap foi desenvolvido para o Twitter por um grupo de desenvolvedores liderados por Mark Otto e Jacob Thornton Logo e se tornou uma das estruturas de front-end e projetos de código aberto mais populares do mundo. </p>

                                      <p>Antes de ser uma estrutura de código-fonte aberto, o Bootstrap era conhecido como Twitter Blueprint. Após alguns meses de desenvolvimento, o Twitter realizou sua primeira Hack Week: o projeto ganhou uma grande popularidade quando desenvolvedores de todos os níveis de habilidade usaram o framework sem qualquer orientação externa. Após o evento, ele serviu como guia de estilo para o desenvolvimento de ferramentas internas na empresa por mais de um ano antes de seu lançamento se tornar público.</p>
                        


                    </div>
                    </div>
                    </section>

                    <section class="section d-grid gap-3" id="react">
                    <div class="container d-grid gap-3">
                    <div class="row d-grid gap-3">
                        
                           
                
                        <h3 class="text-center font-weight-bold" id="program">
                            REACT
                        </h3>
                        <img class="img-fluid" src="https://kinsta.com/pt/wp-content/uploads/sites/3/2023/06/install-react.jpg" />
                        <p> React é uma biblioteca JavaScript de código aberto utilizada para construir interfaces de usuário interativas e reativas. Ela foi desenvolvida pelo Facebook e é amplamente utilizada para desenvolver aplicações web modernas e single-page applications (SPA). React foi lançado pela primeira vez em 2013 e desde então se tornou uma das bibliotecas mais populares para desenvolvimento frontend.  </p>

                        <p>A principal característica do React é o seu modelo de programação baseado em componentes. Ele permite que os desenvolvedores dividam a interface do usuário em pequenos pedaços reutilizáveis chamados de "componentes". Cada componente encapsula seu próprio estado e comportamento, e pode ser facilmente combinado com outros componentes para construir interfaces complexas. </p>                  

                        <p>&nbsp;</p>

                    </div>
                    </div>

                    </section>
                                                                        

            <footer class="bootstrap-classes d-grid gap-3 text-white" style={{background:'#4B0082'}}>
                <div class="container text-center d-grid gap-3">                    
                     <p className="text-footer" style={{padding:20,margin:20}}>
                    Copyright © {x}-Todos os Direitos Reservados
                    </p>
                </div>
            </footer>            

        </div>
  );
}

export default App;
