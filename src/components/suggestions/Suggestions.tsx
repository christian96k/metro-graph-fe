import "./Suggestions.scss";

export interface SuggestionsProps {
    list: {name:string, id:string}[];
    onSelect: (stop_id: string, stop_nane:string) => void;
    searchValue:string;
}

function Suggestions({ list, onSelect, searchValue }: SuggestionsProps) {
    console.log(searchValue);
  return (
    <ul
        className="suggestions position-absolute bg-white shadow p-1 w-100 list-unstyled"
    >
        {list.filter(option => option.name.toLowerCase().includes(searchValue.toLowerCase())).length > 0 ? (
        list.filter(option => option.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index: number) => (
            <li
                key={index}
                className="suggestions__option py-1 px-2 hover-bg-light text-truncate"
                role="button"
                onClick={() => onSelect(item.id, item.name)}
            >
                <span className="font-size-12">
                    {item.name}
                </span>
            </li>
        ))
        ) : (
            <li className="py-1 px-2 text-muted">
                <span className="font-size-12">
                    {'Nessun suggerimento'}
                </span>
            </li>
        )}
    </ul>
  )
}

export default Suggestions