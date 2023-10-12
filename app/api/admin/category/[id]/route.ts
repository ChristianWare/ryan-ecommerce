import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Category from "../../../../../models/category";
import slugify from "slugify";

export async function PUT(
  req: NextRequest,
  context: {
    params: {
      id: string;
    };
  }
) {
  await dbConnect();
  const body = await req.json();
  const { name } = body;

  try {
    const updatingCategory = await Category.findByIdAndUpdate(
      context.params.id,
      {
        ...body,
        slug: slugify(name),
      },
      { new: true }
    );
    return NextResponse.json(updatingCategory);
  } catch (err: any) {
    return NextResponse.json((err.message, { status: 500 }));
  }
}

export async function DELETE(
  req: NextRequest,
  context: {
    params: {
      id: string;
    };
  }
) {
  await dbConnect();
  
  try {
    const deletingCategory = await Category.findByIdAndDelete(
      context.params.id
    );
    return NextResponse.json(deletingCategory);
  } catch (err: any) {
    return NextResponse.json((err.message, { status: 500 }));
  }
}
