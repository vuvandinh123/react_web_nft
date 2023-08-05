import { useLocation } from "react-router";
import { useDocumentTitle } from "../../hooks";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword')
  useDocumentTitle("VVD | Search - "+ keyword);
  return (
    <div>
      search {keyword}
    </div>
  )
}

export default SearchPage
