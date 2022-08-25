export class Api {
  static baseUrl = "https://kenzie-olympics.herokuapp.com/paises";

  static async getInfos() {
    const infos = await fetch(this.baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => err);

    return infos;
  }
}
