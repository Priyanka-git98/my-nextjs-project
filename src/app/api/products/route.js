import { connectionSrt } from "@/library/db";
import { Product } from "@/library/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = [];
    try {
        await mongoose.connect(connectionSrt)
        data = await Product.find();
    } catch (error) {
        data = { success: false }
    }

    return NextResponse.json({ result: data })
}

export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionSrt)

    let product = new Product(payload)
    //     {

    //     name: "iPhone 14",
    //     price: "90,000",
    //     color: "grey",
    //     company: "Apple",
    //     category: "Mobile",
    // });
    const result = await product.save();
    return NextResponse.json({result, success:true})
}
