using System.Runtime.InteropServices.JavaScript;

namespace UIImmersive.Presentation.Pages
{
    public partial class Home
    {
        private readonly string canvasId = $"canvas-{Guid.NewGuid()}";

        [JSImport("defaultScene", "scenes")]
        public static partial void DefaultScene(string canvasId);

        [JSImport("sceneTransition", "scenes")]
        public static partial void SceneTransition(string sceneId);

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                DefaultScene(canvasId);
            }
        }
    }
}
