import { useEffect } from 'react';
import { useIterator } from "./hooks";
import RepoReadme from './RepoReadme';


export function RepoMenu({
    repositories,
    login,
    onSelect = f => f
}) {
    const [{ name }, previous, next ] = useIterator(repositories);

    useEffect(()=> {
        if (!name) return;

        onSelect(name);
    }, [name]);

    return (
            <div style={{display: "flex"}}>
                <button onClick={previous}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&lt;</button>
            </div>
    )
}

export default RepoMenu;