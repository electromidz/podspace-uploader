interface IProps {
  user_group_hash: string;
  folder_hash?: string;
  access_token: string;
}
export const podUploader = async ({
  user_group_hash,
  folder_hash,
  access_token,
}: IProps) => {
  let url: string;
  if (folder_hash && folder_hash.length > 5) {
    url = `https://podspace.pod.ir/api/usergroups/${user_group_hash}/files?folderHash=${folder_hash}&uniqueName=true&isPublic=true`;
  } else {
    url = `https://podspace.pod.ir/api/usergroups/${user_group_hash}/files?uniqueName=true&isPublic=true`;
  }

  if (access_token && access_token.length > 0) {
    const headers: HeadersInit = new Headers();
    headers.set("Accept-Language", "fa-IR");
    headers.set("Authorization", `Bearer ${access_token}`);

    const formData = new FormData();
    formData.append("username", "myusername");
    formData.append("password", "mypassword");

    let data = await fetcheRequest({ url, headers, formData });
    console.log(`podspace-uploader [${data}]`);
    return data;
  }
  return { errorMessage: "Access denied" };
};

interface IFetchRequest {
  url: string;
  headers: HeadersInit;
  formData: FormData;
}
async function fetcheRequest({ url, headers, formData }: IFetchRequest) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers,
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: formData as unknown as BodyInit,
  });
  return await response.json();
}

async function data() {
  console.log("starting");
  const data = await podUploader({
    user_group_hash: "9L19PCEJLJ1TXW",
    folder_hash: "V45ODC4VGFROJ32U",
    access_token: "check",
  });
  console.log(data);
  return data;
}
data();
