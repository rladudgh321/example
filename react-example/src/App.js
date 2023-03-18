import './App.css';
import {useState} from 'react';
function Header(props){
    return <header>
        <h1><a href="App.js" onClick={event=>{
            event.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props){
    const lis = [];
    for(let i=0;i<props.list.length;i++){
        let t = props.list[i];
        lis.push(<li key={t.id}><a href={'/read/'+t.id} onClick={event=>{
            event.preventDefault();
            props.onChangeMode(t.id);
        }}>{t.title}</a></li>);
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Article(props){
    return <article>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </article>    
}

function Create(props){
    return <article>
        <h2>Create</h2>
        <form onSubmit={event=>{
            event.preventDefault();
            let title = event.target.title.value;
            let body = event.target.body.value;
            props.onCreate(title,body);
        }}>
            <p><input type="text" name="title" placeholder="title" /></p>
            <p><textarea name="body" placeholder="body" /></p>
            <p><input type="submit" value="Create" /></p>
        </form>
    </article>    
}

function Update(props){
    const [title,setTitle] = useState(props.title);
    const [body,setBody] = useState(props.body);
    return <article>
        <h2>Update</h2>
        <form onSubmit={event=>{
            event.preventDefault();
            let title = event.target.title.value;
            let body = event.target.body.value;
            props.onUpdate(title,body);
        }}>
            <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
                setTitle(event.target.value);
            }}/></p>
            <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
                setBody(event.target.value);
            }} /></p>
            <p><input type="submit" value="Update" /></p>
        </form>
    </article>    
}

function App() {
    const [nextId,setNextId] = useState(3);
    const [id,setId] = useState(null);
    const [mode,setMode] = useState('welcome');
    const [topics,setTopics] = useState([
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'}
    ]);
    let content, context = null;
    if(mode === 'welcome'){
        content = <Article title="WELECOME" body="introduce web" />
    }else if(mode === 'read'){
        let title,body=null;
        for(let i=0;i<topics.length;i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body} />
        context = 
                <><li><a href={"/Update/"+id} onClick={event=>{
                    event.preventDefault();
                    setMode('update');
                }}>update</a></li>
                <li>
                    <input type="button" value="delete" onClick={()=>{
                        const newTopics = [];
                        for(let i=0;i<topics.length;i++){
                            if(topics[i].id !== id){
                                newTopics.push(topics[i]);
                            }
                        }
                        setTopics(newTopics);
                    }} />
                </li></>
        
    }else if(mode === 'create'){
        content = <Create onCreate={(title,body)=>{
            const newTopic = {id:nextId ,title:title, body:body}
            const newTopics = [... topics];
            newTopics.push(newTopic);
            setTopics(newTopics);
            setNextId(nextId+1);
            setMode('read');
            setId(nextId);
            
        }} 
        />
    }else if(mode === 'update'){
        let title,body=null;
        for(let i=0;i<topics.length;i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(title,body)=>{
            const newTopic = {id:id, title:title, body:body};
            const newTopics = [...topics];
            for(let i=0;i<newTopics.length;i++){
                if(newTopics[i].id === id){
                    newTopics[i] = newTopic;
                    break;
                }
            }
            setTopics(newTopics);
            setMode('read');
            setId(id);
        }} />
    }




  return (
    <div>
        <Header title="WEB" onChangeMode={()=>{
            setMode('welcome');
        }} />
        <Nav list={topics} onChangeMode={id=>{
            setMode('read');
            setId(id);
        }} />
        {content}
        <ul>
            <li>
                <a href="/Create" onClick={event=>{
                    event.preventDefault();
                    setMode('create');
                }}>Create</a>
            </li>
            {context}
        </ul>
    </div>
  );
}

export default App;
