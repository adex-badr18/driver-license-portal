export default function FormAction({
    handleSubmit,
    submitting,
    type = "Button",
    action = "submit",
    text,
}) {
    return (
        <>
            {type === "Button" ? (
                <button
                    type={action}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                    onSubmit={handleSubmit}
                >
                    {
                      submitting ? (
                        <div className="flex justify-center gap-4">
                            <div className="w-6 h-6 rounded-full animate-spin border-y-4 border-solid border-white border-t-transparent shadow-md"></div>
                            <span>Creating...</span>
                        </div>
                      ) : text
                    }
                </button>
            ) : (
                <></>
            )}
        </>
    );
}
