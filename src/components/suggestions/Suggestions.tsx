import "./Suggestions.scss";

export interface SuggestionsProps {
    list: {name:string, id:string}[];
    onSelect: (stop_id: string, stop_nane:string) => void;
    searchValue:string;
}

function Suggestions({ list, onSelect, searchValue }: SuggestionsProps) {
  return (
    <ul
        className="suggestions position-absolute bg-gray-gradient border-black-4 shadow w-94 list-unstyled"
    >
        {list.filter(option => option.name.toLowerCase().includes(searchValue.toLowerCase())).length > 0 ? (
        list.filter(option => option.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index: number) => (
            <li
                key={index}
                className="suggestions__option py-1 px-2 d-flex hover-bg-light text-truncate"
                role="button"
                onClick={() => onSelect(item.id, item.name)}
            >
                <span className="font-size-10">
                    {item.name}
                </span>
            </li>
        ))
        ) : (
            <li className="py-1 px-2 color-black-5">
                <span className="font-size-10">
                    {'Nessun suggerimento'}
                </span>
            </li>
        )}
    </ul>
  )
}

export default Suggestions