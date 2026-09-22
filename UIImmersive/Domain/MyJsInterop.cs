using System.Runtime.InteropServices.JavaScript; // Обязательно

namespace UIImmersive.Domain
{
    public static partial class MyJsInterop
    {
        // 1. Маршаллинг простых типов и строк выполняется автоматически
        [JSImport("initThree", "threeWrapper")]
        public static partial void InitThree(string message);

        //// 2. Явный маршаллинг сложных типов (например, даты и функций обратного вызова)
        //[JSImport("processData", "myModule")]
        //public static partial void ProcessData(
        //    [JSMarshalAs<JSType.Date>] DateTime date,
        //    [JSMarshalAs<JSType.Function<JSType.String, JSType.Void>>] Action<string>callback);

        //// 3. Маршаллинг асинхронных операций (Task превращается в Promise)
        //[JSImport("fetchDataAsync", "myModule")]
        //[return: JSMarshalAs<JSType.Promise<JSType.String>>]
        //public static partial Task<string> FetchDataAsync();
    }
}
