export async function onRequestPost({ request }) {
    const formData = await request.formData();

    // Inject secret field like Astro version
    formData.set("entry.915684076", "mGmacomPlaint@25ocT20");

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeQ_LhK7-sjHEZDb7LL3vXO6VifA66lFvsN6QQ5viUR9cBmag/formResponse";

    await fetch(googleFormUrl, {
        method: "POST",
        body: formData,
        // Google Forms does not allow CORS
        mode: "no-cors"
    });

    return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json" }
    });
}

