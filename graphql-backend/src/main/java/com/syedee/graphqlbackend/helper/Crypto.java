package com.syedee.graphqlbackend.helper;

import java.util.Base64;

public class Crypto {

    private static final Base64.Encoder ENCODER = Base64.getEncoder();

    private static final Base64.Decoder DECODER = Base64.getDecoder();

    public static String encodeBase64(String string) {
        return ENCODER.encodeToString(string.getBytes());
    }

    public static String decodeBase64(String string) {
        return new String(DECODER.decode(string));
    }

    public static void main(String[] args) {
        var a = "syedee:simon";
        var b= a.split(":");
    }
}
