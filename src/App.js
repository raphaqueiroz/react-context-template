import { GlobalState } from "./contexts/GlobalState";
import Router from "./routes/Router";

export default function App() {
  return (
    <>
    <GlobalState>{/* passa as informações à todos que estrão dentro dele*/}
      <Router />
    </GlobalState>
      
    </>
  );
}
