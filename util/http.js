export const submitRequestForm = async (
  { name, email, platform, client },
  onResult
) => {
  const body = JSON.stringify({
    type: "request_access",
    data: {
      name: name,
      email: email,
      platform: platform,
      client: client || "",
    },
  });
  fetch("https://api.manylogs.com/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: body,
  }).then((response) => {
    onResult(response.status === 200);
  });
};
