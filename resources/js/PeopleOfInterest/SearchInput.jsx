export default function SearchInput({searchTerm, setSearchTerm}) {
    return (
        <div className="people-of-interest__search">

            <label htmlFor="">Search:</label>
            <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by name..." />
        
        </div>
    );
}