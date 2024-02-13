import { RouterName } from '@routes/index';
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [RouterName.authenticator]: undefined;
      [RouterName.email]: undefined;
      [RouterName.password]: {
        email: string;
      };
      [RouterName.camera]: undefined;
    }
  }
}
