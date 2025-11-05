// functions/getServerTime.js
export default async ({ req, res, log, error }) => {
  try {
    // Simply return the current server time
    const serverTime = new Date().toISOString();

    log(`Returning server time: ${serverTime}`);

    return res.json(
      {
        success: true,
        timestamp: serverTime,
        source: "appwrite_server",
      },
      200
    );
  } catch (err) {
    error("Error in getServerTime: " + err.message);
    return res.json(
      {
        success: false,
        error: err.message,
        timestamp: new Date().toISOString(),
      },
      500
    );
  }
};
