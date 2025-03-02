import { Routes as Router,Route } from "react-router-dom"
import { Vagas } from "../pages/vagas"
import { Candidaturas } from "../pages/candidaturas"
import { Conta } from "../pages/conta"
import { Login } from "../pages/login"
import { Cadastro } from "../pages/cadastro"
import { Home } from "../pages/home"
import { VagaId } from "../pages/vagaId"
import { HomePainel } from "../pages/painel/home"
import { CandidatosPainel } from "../pages/painel/candidatos"
import { NovaVagaPainel } from "../pages/painel/novaVaga"
import { ContaPainel } from "../pages/painel/conta"
import { EmpresaPainel } from "../pages/painel/empresa"
import { Cursos } from "../pages/cursos"
import { CursoId } from "../pages/cursoId"
import { MeusCursos } from "../pages/meuscursos"
import { CandidaturaId } from "../pages/candidaturaId"
import { CreateCurriculum } from "../pages/createCurriculum"
import PaginaNaoEncontrada from "../pages/PaginaNaoEncontrada"
import Private from "../componentes/Private"
import AddEmpresa from "../pages/painel/addEmpresa"
import { VagaPainelId } from "../pages/painel/vagaPainelId"
import { CandidatoId } from "../pages/painel/candidatoId"
import {PrivateRecruiter} from "../componentes/Private/privateTypeRecruiter"
import { PrivateCandidate } from "../componentes/Private/PrivateTypeCandidates"
import { UpdateCurriculum } from "../pages/atualizar_curriculo"
import { VagasEmpresaId } from "../pages/vagasEmpresaId"
import { AtualizarVagaPainel } from "../pages/painel/atualizarVaga"
import { Mensagens } from "../pages/mensagens"
import Plataforma from "../pages/plataforma"
import Planos from "../pages/painel/planos"
import AtualizarEmpresa from "../pages/painel/atualizarEmpresa"





export const Routes=()=>{
  
    return <Router>
       <>
            <Route path="/" element={<Home/>}/>
            <Route path="/vagas" element={<Vagas/>}/>
            <Route path="/vagas/:id" element={<VagaId />}/>
            <Route path="/login/:type?" element={<Login />}/>
            <Route path="/cadastro/:type?" element={<Cadastro />}/>
            <Route path="/cursos" element={<Cursos />}/>
            <Route path="/cursos/:id" element={<CursoId />}/>
            <Route path="*" element={<PaginaNaoEncontrada />}/>
          
            //recrutador
            <Route path={`/painel/recrutador`} element={<Private><PrivateRecruiter><HomePainel /></PrivateRecruiter></Private>}/>
            <Route path={`/painel/recrutador/:nomerecrutador/:empresa?/vagaspostadas/:id`} element={<Private><PrivateRecruiter><VagaPainelId /></PrivateRecruiter></Private>}/>
            <Route path={`/painel/recrutador/:nomerecrutador/:empresa?/profissionais`} element={<Private><PrivateRecruiter><CandidatosPainel /></PrivateRecruiter></Private>}/>
            <Route path={`/painel/recrutador/:nomerecrutador/profissionais/:profissionalnome/:id`} element={<Private><PrivateRecruiter><CandidatoId /></PrivateRecruiter></Private>}/>
            <Route path="/painel/recrutador/:nomerecrutador/:empresa?/novavaga" element={<Private><PrivateRecruiter><NovaVagaPainel /></PrivateRecruiter></Private>}/>
            <Route path="/painel/recrutador/atualizarvaga/:id" element={<Private><PrivateRecruiter><AtualizarVagaPainel /></PrivateRecruiter></Private>}/>
            <Route path={`/painel/recrutador/:nomerecrutador/minha-conta`} element={<Private><PrivateRecruiter><ContaPainel /></PrivateRecruiter></Private>}/>
            <Route path={`/painel/recrutador/:nomerecrutador/:empresa?`} element={<Private><EmpresaPainel/></Private>}/>
            <Route path="/painel/recrutador/:nomerecrutador/configure-empresa" element={<Private><PrivateRecruiter><AddEmpresa /></PrivateRecruiter></Private>}/>
            <Route path={`/painel/recrutador/:nomerecrutador/:empresa/edite_empresa`} element={<Private><PrivateRecruiter><AtualizarEmpresa /></PrivateRecruiter></Private>}/>
            <Route path="/painel/recrutador/planos" element={<Planos />}/>
            <Route path="*" element={<PaginaNaoEncontrada />}/>

        </>
       
        <>
             <Route path="/vagas" element={<Vagas/>}/>
             <Route path="/vagas/:id" element={<VagaId />}/>  
             <Route path="/mensagens" element={<Mensagens />}/>
             <Route path="/:empresa/:id/vagas" element={<VagasEmpresaId />}/>
             <Route path="/candidaturas" element={<Private><PrivateCandidate><Candidaturas /></PrivateCandidate></Private>}/>
             <Route path="/candidaturas/:id" element={<Private><PrivateCandidate><CandidaturaId /></PrivateCandidate></Private>}/>
             <Route path="/conta" element={<Private><PrivateCandidate><Conta /></PrivateCandidate></Private>}/>
             <Route path="/cursos" element={<Cursos />}/>
             <Route path="/criar_curriculo" element={<Private><PrivateCandidate><CreateCurriculum /></PrivateCandidate></Private>}/>
             <Route path="/atualizar_curriculo/:id" element={<Private><PrivateCandidate><UpdateCurriculum /></PrivateCandidate></Private>}/>
            <Route path="/cursos/:id" element={<CursoId />}/>
            <Route path="/meus_cursos" element={<MeusCursos />}/>
            <Route path="/plataforma_ead/curso/:cursoid/:namecurso" element={<Private><PrivateCandidate><Plataforma /></PrivateCandidate></Private>}/>
            <Route path="*" element={<PaginaNaoEncontrada />}/>
         </>
        
    </Router>
}