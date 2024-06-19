import Fetch from './Fetch';
import RepoMenu from "./RepoMenu";

function UserRepositories({
    login,
    selectedRepo,
    onSelect = f => f
}) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={({ data }) => (
                <RepoMenu
                    repositories={data}
                    selected={selectedRepo}
                    onSelect={onSelect}
                />
            )}
        />
    );
}

export default UserRepositories;