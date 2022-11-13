import 'react-router-dom';

declare module 'react-router-dom' {
  export declare function useParams<
    ParamsOrKey extends string | Record<string, string | undefined> = string,
  >(): { [key in ParamsOrKey]: string };
}