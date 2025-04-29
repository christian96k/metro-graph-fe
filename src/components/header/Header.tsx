import "./Header.scss";
import Suggestions from "../suggestions/Suggestions";
import { useDashboardFacade } from "../../pages/dashboard/store/dashboard.facade";
import { useCallback, useRef, useState } from "react";

function Header() {
  const { graphMetro$, facadeSearchMetroPath, facadeResetMetroPath, facadeResetMetroStop } = useDashboardFacade();

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
    if (searchFrom && searchTo) {
      facadeSearchMetroPath({from: searchFrom, to: searchTo});
      facadeResetMetroStop();
      setShowFromSuggestions(false);
      setShowToSuggestions(false);
    }
  },[searchFrom, searchTo]);
  
  const onPathReset = useCallback(() => {
    setSearchFrom({name: '', id: ''});
    setSearchTo({name: '', id: ''});
    if (inputFromRef.current) inputFromRef.current.value = '';
    if (inputToRef.current) inputToRef.current.value = '';
    facadeResetMetroPath();
  },[searchFrom, searchTo]);

  return (
    <form className="header d-flex flex-column align-items-center bg-black-gradient   justify-content-between gap-1 px-2 px-md-3 py-2 pt-md-3" 
      onSubmit={(e) => { e.preventDefault(); onPathSearch(); }}
      onReset={(e) => { e.preventDefault(); onPathReset(); }}>
      {/* <div className="logo d-flex align-items-center justify-content-center box-shadow">{'C'}</div> */}
      <div className="header__fields-search col-12 d-flex gap-2 position-relative">
        <div className="position-relative w-100">
          <input
            ref={inputFromRef}
            type="text"
            className="form-control"
            placeholder="Partenza"
            onChange={(e) => {
              setSearchFrom({name:e.target.value, id: ''});
              setShowFromSuggestions(true);
            }}
            onFocus={() => setShowFromSuggestions(true)}
            onBlur={() => setTimeout(() => {setShowFromSuggestions(false); onPathSearch()}, 200)}
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
          placeholder="Arrivo"
          onChange={(e) => {
            setSearchTo({name:e.target.value, id: ''});
            setShowToSuggestions(true);
          }}
          onFocus={() => setShowToSuggestions(true)}
          onBlur={() => setTimeout(() => {setShowToSuggestions(false), onPathSearch()}, 200)}
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

        <div className="header__action d-flex">
          <button  type="submit" className={`btn btn-sm  text-white icon-search font-size-18 ${!searchFrom.id || !searchTo.id ? 'disabled-element' : ''} `} aria-label="Search" ></button>
          <button type="reset" role="button" className={`btn btn-sm  text-white icon-trash font-size-18 ${searchFrom.id || searchTo.id ? '' : 'disabled-element'} `} aria-label="Reset"></button>
        
        </div>
      </div>


      <div className="header__label text-center w-100 col-12">
        <p className="mb-0 font-size-10 color-black-5">
          {'Inizia la tua ricerca selezionando la fermata di partenza e di arrivo'}
        </p>
      </div>
    </form>
  );
}

export default Header;
