import "./Header.scss";
import Suggestions from "../suggestions/Suggestions";
import { useDashboardFacade } from "../../pages/dashboard/store/dashboard.facade";
import { useCallback, useRef, useState } from "react";

function Header() {
  const { graphMetro$ } = useDashboardFacade();

  const [searchFrom, setSearchFrom] = useState<{name:string, id:string}>({name:'', id:''});
  const [searchTo, setSearchTo] = useState<{name:string, id:string}>({name:'', id:''});

  const inputFromRef = useRef<HTMLInputElement>(null);
  const inputToRef = useRef<HTMLInputElement>(null);

  const [showFromSuggestions, setShowFromSuggestions] = useState<boolean>(false);
  const [showToSuggestions, setShowToSuggestions] = useState<boolean>(false);


  const onStopSelect = useCallback(
    (stopId: string, stopName: string, mode: 'FROM' | 'TO') => {
      if (mode === 'FROM') {
        setSearchFrom({name:stopName, id: stopId});
        setShowFromSuggestions(false);
        if (inputFromRef.current) {
          inputFromRef.current.value = stopName;
        }
      }
  
      if (mode === 'TO') {
        setSearchTo({name:stopName, id: stopId});
        setShowToSuggestions(false);
        if (inputToRef.current) {
          inputToRef.current.value = stopName;
        }
      }
    },
    []
  );

  const onPathSearch = useCallback(() => {
    if (searchFrom&& searchTo) {
      console.log('FROM:', searchFrom);
      console.log('TO:', searchTo);
    } else {
      // TODO: error handling
      alert('Seleziona una fermata di partenza e una di arrivo!');
    }
  },[searchFrom, searchTo]); 
  

  return (
    <header className="header d-flex align-items-center justify-content-between gap-4 px-3 py-2 py-md-2">
      <div className="logo d-flex align-items-center justify-content-center box-shadow">{'C'}</div>
      <div className="header__fields-search d-flex gap-2 position-relative">
        <div className="position-relative w-100">
          <input
            ref={inputFromRef}
            type="text"
            className="form-control"
            placeholder="Partenza da"
            onChange={(e) => {
              setSearchFrom({name:e.target.value, id: ''});
              setShowFromSuggestions(true);
            }}
            onFocus={() => setShowFromSuggestions(true)}
            onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
          />
          {graphMetro$ && searchFrom && showFromSuggestions && (
            <Suggestions
              searchValue={searchFrom.name}
              list={graphMetro$.metro_stops.map(metro => ({ name: metro.stop_name, id: metro.stop_id }))}
              onSelect={(id, name) => {
                onStopSelect(id, name, 'FROM');
                setShowFromSuggestions(false);
              }}
            />
          )}

        </div>

        <div className="position-relative w-100">
        <input
          ref={inputToRef}
          type="text"
          className="form-control"
          placeholder="Arrivo a"
          onChange={(e) => {
            setSearchTo({name:e.target.value, id: ''});
            setShowToSuggestions(true);
          }}
          onFocus={() => setShowToSuggestions(true)}
          onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
        />

          {graphMetro$ && searchTo && showToSuggestions && (
            <Suggestions
              searchValue={searchTo.name}
              list={graphMetro$.metro_stops.map(metro => ({ name: metro.stop_name, id: metro.stop_id }))}
              onSelect={(id, name) => {
                onStopSelect(id, name, 'TO');
                setShowToSuggestions(false);
              }}
            />
          )}

        </div>

      </div>

      <div className="header__action">
        <span role="button" className={`font-size-18 ${!searchFrom.id || !searchTo.id ? 'disabled-element' : ''} `} aria-label="Search" onClick={onPathSearch}>🔍</span>
      </div>
    </header>
  );
}

export default Header;
