interface IResponse<D = unknown> {
  status: string;
  data: D;
}
