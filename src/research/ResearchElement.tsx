import './ResearchElement.css';

interface ResearchElementProps {
    title: string;
}


const ResearchElement: React.FC<ResearchElementProps> = ({
    title,
}) => {

    return (
        <>
            <header className="App-header">
                <h1>{title}</h1>
            </header> 
        </>
    );
}

export default ResearchElement