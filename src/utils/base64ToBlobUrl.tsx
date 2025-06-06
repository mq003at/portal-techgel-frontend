export const base64ToBlobUrl = (base64: string, mimeType: string) => {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length).fill(0).map((_, i) => slice.charCodeAt(i));
        byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: mimeType });
    return {url: URL.createObjectURL(blob), blob: blob };
};