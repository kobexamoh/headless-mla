export default function SearchBar() {
    function search(formData) {
        const query = formData.get("search");
        alert(`You're looking for '${query}'`);
    }
    return (
      <div class="mt-4">
        <form action={search}>
          <input
            name="search"
            className="border-2 border-gray-300 px-4 focus:border-sky-500 rounded-lg py-2 w-10/12"
            placeholder="Enter a name or party..."
          />
          <button type="submit" className="w-2/12">Search</button> 
          {/* TODO: replace with search icon */}
        </form>
      </div>
    );
}