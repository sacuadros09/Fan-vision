import { DataPublications } from "../mocks/publicationData";
import { Publicationsdata } from "../mocks/publicationData";

class Publications {
    async getApi(): Promise<DataPublications[]> {
      const publication: DataPublications[] = await new Promise((resolve) => {
        setTimeout(()=> resolve(Publicationsdata), 1000)
      });
      return publication;
    }
  }

  export default new Publications();