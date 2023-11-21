import { connectionSrt } from "@/library/db";
import { Product } from "@/library/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
    const productId = content.params.prodcutid;
    const filter = { _id:productId }
    const payload = await request.json();
    // console.log(payload);
    await mongoose.connect(connectionSrt);
    const result = await Product.findOneAndUpdate(filter, payload)
    return NextResponse.json({ result, success: true })

}